import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Categoria {
  Hardware = 'Hardware',
  Software = 'Software',
  Redes = 'Redes',
  Seguridad = 'Seguridad',
  SoporteUsuario = 'Soporte Usuario',
}

export enum Prioridad {
  Baja = 'Baja',
  Media = 'Media',
  Alta = 'Alta',
  Critica = 'Crítica',
}

export enum Estado {
  Pendiente = 'Pendiente',
  EnProceso = 'En Proceso',
  Finalizada = 'Finalizada',
}

@Entity('solicitudes')
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  cliente: string;

  @Column({ type: 'enum', enum: Categoria })
  categoria: Categoria;

  @Column({ type: 'enum', enum: Prioridad })
  prioridad: Prioridad;

  @Column({ type: 'enum', enum: Estado, default: Estado.Pendiente })
  estado: Estado;

  @Column('text')
  descripcion: string;

  @Column({ type: 'date' })
  fechaSolicitud: Date;
}