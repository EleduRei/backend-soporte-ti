import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud, Estado } from './entities/solicitude.entity';
import { CreateSolicitudDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudDto } from './dto/update-solicitude.dto';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitud)
    private readonly solicitudRepository: Repository<Solicitud>,
  ) {}

  async create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud> {
    const fecha = new Date(createSolicitudDto.fechaSolicitud);
    if (fecha > new Date()) {
      throw new BadRequestException('La fecha no puede ser posterior a la actual (RN07)');
    }

    const nuevaSolicitud = this.solicitudRepository.create({
      ...createSolicitudDto,
      estado: Estado.Pendiente, // RN05: Estado inicial Pendiente
    });
    return await this.solicitudRepository.save(nuevaSolicitud);
  }

  async findAll(query: any): Promise<Solicitud[]> {
    return await this.solicitudRepository.find({ where: query });
  }

  async findOne(id: number): Promise<Solicitud> {
    const solicitud = await this.solicitudRepository.findOneBy({ id });
    if (!solicitud) {
      throw new NotFoundException(`Solicitud con id ${id} no encontrada (RN10)`);
    }
    return solicitud;
  }

  async update(id: number, updateSolicitudDto: UpdateSolicitudDto): Promise<Solicitud> {
    const solicitud = await this.findOne(id);

    // RN09: Transición de estado prohibida
    if (solicitud.estado === Estado.Finalizada && updateSolicitudDto.estado === Estado.Pendiente) {
      throw new BadRequestException('Una solicitud Finalizada no puede volver a Pendiente (RN09)');
    }

    Object.assign(solicitud, updateSolicitudDto);
    return await this.solicitudRepository.save(solicitud);
  }

  async remove(id: number): Promise<void> {
    const solicitud = await this.findOne(id);

    // RN08: Regla de eliminación
    if (solicitud.estado === Estado.EnProceso) {
      throw new BadRequestException('No se puede eliminar una solicitud En Proceso (RN08)');
    }

    await this.solicitudRepository.remove(solicitud);
  }
}