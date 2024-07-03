import {
	DesarrolloWeb,
	MarketingContenido,
	SocialMediaManagement,
	CRO,
	Localitation,
} from '@/assets/services'

export const services = {
	es: [
		{
			title: 'Desarrollo Web',
			description:
				'Creamos sitios web modernos, escalables y seguros, adaptados a las necesidades específicas de tu negocio, garantizando una experiencia de usuario óptima y un rendimiento superior.',
			advantages: [
				'Diseño personalizado que refleja la identidad de tu marca.',
				'Optimización para motores de búsqueda (SEO) para mejorar la visibilidad online.',
				'Integración con herramientas y plataformas populares para una mayor funcionalidad.',
			],
			image: DesarrolloWeb,
		},
		{
			title: 'Marketing de Contenido',
			description:
				'Diseñamos y publicamos contenido estratégico y atractivo que refleja la identidad de tu marca, aumentando la visibilidad y el engagement con tu audiencia.',
			advantages: [
				'Creación de contenido de alta calidad que atrae y retiene a la audiencia.',
				'Estrategias de contenido basadas en análisis y datos para maximizar el impacto.',
				'Aumento del tráfico web y mejora del posicionamiento en buscadores.',
				'Fortalecimiento de la relación con los clientes a través de contenido relevante.',
			],
			image: MarketingContenido,
		},
		{
			title: 'Gestión de Redes Sociales',
			description:
				'Optimizamos y gestionamos tus redes sociales con contenido relevante y campañas efectivas, fortaleciendo tu presencia online y fidelizando a tus seguidores.',
			advantages: [
				'Aumento del alcance y la visibilidad de tu marca en las redes sociales.',
				'Interacción y compromiso constante con la audiencia.',
				'Análisis y reportes detallados para medir el éxito de las campañas.',
				'Desarrollo de una estrategia de contenido coherente y atractiva.',
			],
			image: SocialMediaManagement,
		},
		{
			title: 'Retención de Clientes',
			description:
				'Implementamos estrategias avanzadas para mejorar la retención y lealtad de tus clientes, maximizando la rentabilidad y el valor a largo plazo de cada cliente.',
			advantages: [
				'Programas de fidelización personalizados para aumentar la lealtad del cliente.',
				'Análisis de datos para identificar y abordar puntos débiles en la retención.',
				'Comunicación regular y personalizada con los clientes.',
			],
			image: CRO,
		},
		{
			title: 'Localización',
			description:
				'Aumentamos la visibilidad y rentabilidad de tus locales mediante estrategias de marketing local personalizadas, atrayendo más clientes a tu negocio físico.',
			advantages: [
				'Estrategias de marketing específicas para atraer clientes locales.',
				'Optimización de la presencia en búsquedas locales y directorios.',
				'Promociones y eventos locales para aumentar el tráfico en tienda.',
				'Monitoreo y análisis del rendimiento de las campañas locales.',
			],
			image: Localitation,
		},
	],
}
