 SELECT  u.name + '.' + t.name AS [tabla],      
            td.value AS [tabla_desc],      
            c.name AS [column],      
			cd.value AS [colum_Desc]
	  --INTO #ListaDeTrabajoT      
   FROM        sysobjects t      
   INNER JOIN  sysusers u      
    ON      u.uid = t.uid      
   LEFT OUTER JOIN sys.extended_properties td      
    ON      td.major_id = t.id      
    AND     td.minor_id = 0      
    AND     td.name = 'MS_Description'      
   INNER JOIN  syscolumns c      
    ON      c.id = t.id      
   LEFT OUTER JOIN sys.extended_properties cd      
    ON      cd.major_id = c.id      
    AND     cd.minor_id = c.colid      
    AND     cd.name = 'MS_Description'      
   WHERE t.type = 'u'     
         AND      
         t.name='ejemplo'    
		 AND c.name ='id'
     
     
     Create PROCEDURE [dbo].[sp_UpdateTablaDescColumnas]
       @Tabla varchar(max),
	   @Campo varchar(max),
	   @DescripcionCampo varchar(max)
AS
BEGIN
	INSERT INTO TablasDD_Historico(Desc_Tabla,Columna,DescripcionColumna,Nom_tabla,Fecha,Usuario,Activo,ConexionId,
				Desc_Tabla_Mod,ColumnaModificado,DescripcionColumnaMod,Nom_tabla_Mod,Fecha_Modificacion,Usuario_Modificacion,
				Activo_Modificacion,ConexionId_Modificacion,TablaId)

	SELECT UsuarioId,ConexionId,Activo,FechaModificacion,UsuarioMod,@UsuarioId_Mod,@ConexionId_Mod,@Activo_Mod,GETDATE(),@UsuarioMod_Mod,id_UsuarioConexion
	FROM Conexion_Usuario WHERE id_UsuarioConexion=@id_UsuarioConexion

	UPDATE	Conexion_Usuario SET
	   		UsuarioId= @UsuarioId_Mod,
		    ConexionId=@ConexionId_Mod,
		    Activo=@Activo_Mod,
			FechaModificacion=GETDATE(),
		    UsuarioMod=@UsuarioMod_Mod 
	WHERE id_UsuarioConexion=@id_UsuarioConexion
END



USE [HEONCAFESALUDSUB_20170728]
GO

/****** Object:  Table [dbo].[TablasDD]    Script Date: 18/05/2018 05:52:33 p.m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TablasDD](
	[Id_tabla] [int] IDENTITY(1,1) NOT NULL,
	[Desc_Tabla] [varchar](250) NULL,
	[Nom_tabla] [varchar](50) NULL,
	[FechaMod] [datetime] NULL,
	[UsuarioMod] [varchar](50) NULL,
	[Activo] [bit] NULL,
	[ConexionId] [int] NULL,
 CONSTRAINT [PK_TablasDD] PRIMARY KEY CLUSTERED 
(
	[Id_tabla] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO




USE [HEONCAFESALUDSUB_20170728]
GO

/****** Object:  Table [dbo].[TablasDD_Historico]    Script Date: 18/05/2018 05:52:48 p.m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TablasDD_Historico](
	[idHistorico] [int] IDENTITY(1,1) NOT NULL,
	[Desc_Tabla] [varchar](250) NULL,
	[Columna] [varchar](250) NULL,
	[DescripcionColumna] [varchar](250) NULL,
	[Nom_tabla] [varchar](50) NULL,
	[Fecha] [datetime] NULL,
	[Usuario] [varchar](50) NULL,
	[Activo] [bit] NULL,
	[ConexionId] [int] NULL,
	[Desc_Tabla_Mod] [varchar](250) NULL,
	[ColumnaModificado] [varchar](250) NULL,
	[DescripcionColumnaMod] [varchar](250) NULL,
	[Nom_tabla_Mod] [varchar](50) NULL,
	[Fecha_Modificacion] [datetime] NULL,
	[Usuario_Modificacion] [varchar](50) NULL,
	[Activo_Modificacion] [bit] NULL,
	[ConexionId_Modificacion] [int] NULL,
	[TablaId] [int] NULL,
 CONSTRAINT [PK_TablasDD_Historico] PRIMARY KEY CLUSTERED 
(
	[idHistorico] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[TablasDD_Historico]  WITH CHECK ADD  CONSTRAINT [FK_TablasDD_Historico_TablasDD] FOREIGN KEY([TablaId])
REFERENCES [dbo].[TablasDD] ([Id_tabla])
GO

ALTER TABLE [dbo].[TablasDD_Historico] CHECK CONSTRAINT [FK_TablasDD_Historico_TablasDD]
GO






