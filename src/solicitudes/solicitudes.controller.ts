import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudDto } from './dto/update-solicitude.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Solicitudes')
@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Post()
  create(@Body() createSolicitudDto: CreateSolicitudDto) {
    return this.solicitudesService.create(createSolicitudDto);
  }

  @Get('buscar')
  buscar(@Query() query: any) {
    // Busca por estado, prioridad y/o categoría
    return this.solicitudesService.findAll(query);
  }

  @Get()
  findAll() {
    return this.solicitudesService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSolicitudDto: UpdateSolicitudDto) {
    return this.solicitudesService.update(+id, updateSolicitudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudesService.remove(+id);
  }
}