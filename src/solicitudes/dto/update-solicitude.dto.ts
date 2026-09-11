import { PartialType } from '@nestjs/swagger';
import { CreateSolicitudDto } from './create-solicitude.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { Estado } from '../entities/solicitude.entity'; 

export class UpdateSolicitudDto extends PartialType(CreateSolicitudDto) {
  @IsOptional()
  @IsEnum(Estado, { message: 'Estado inválido' })
  estado?: Estado;
}