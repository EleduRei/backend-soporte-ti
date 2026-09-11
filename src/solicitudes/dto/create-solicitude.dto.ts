import { IsString, MinLength, IsNotEmpty, IsEnum, IsDateString, MaxDate } from 'class-validator';
import { Categoria, Prioridad, Estado } from '../entities/solicitude.entity';
import { Transform } from 'class-transformer';

export class CreateSolicitudDto {
  @IsString()
  @MinLength(5, { message: 'El título debe tener al menos 5 caracteres (RN01)' })
  titulo: string;

  @IsString()
  @IsNotEmpty({ message: 'El cliente no puede quedar vacío (RN02)' })
  cliente: string;

  @IsEnum(Categoria, { message: 'Categoría inválida (RN03)' })
  categoria: Categoria;

  @IsEnum(Prioridad, { message: 'Prioridad inválida (RN04)' })
  prioridad: Prioridad;

  @IsString()
  @MinLength(15, { message: 'La descripción debe tener al menos 15 caracteres (RN06)' })
  descripcion: string;

  @IsDateString({}, { message: 'Debe ser una fecha válida' })
  fechaSolicitud: string;
}