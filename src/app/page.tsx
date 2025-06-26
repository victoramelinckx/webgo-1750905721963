
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Digitaliza tus ventas sin complicaciones con soporte 24/7 y rapidez garantizada para pequeños negocios." cta1="Transforma Ahora" />
<How step1Title="Contacta WebGo" step1Desc="Comunica tu necesidad de digitalizar ventas." step2Title="Desarrollo Exprés" step2Desc="Creamos tu web en 24 horas." step3Title="Soporte Constante" step3Desc="Asistencia 24/7 para optimizar ventas online." />
<Aboutus headline="WebGo: Digitaliza y Aumenta Ventas" subheadline="Expertos en digitalización para pequeños negocios sin complicaciones ni pérdidas de tiempo." beneficiotitulo1="Aumento Rápido" beneficio1="Incrementa ventas online eficazmente." beneficiotitulo2="Gestión Sencilla" beneficio2="Simplifica tu presencia digital." />
<Services heading="Transforma Recomendaciones en Ventas Online" description="Rapidez, compromiso, innovación para que tu negocio crezca digitalmente sin complicaciones." services={[{"name":"Diseño Web Exprés","icon":"lightning","description":"Web listas en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Ayuda constante y efectiva."},{"name":"SEO Personalizado","icon":"search","description":"Aumenta la visibilidad en buscadores."},{"name":"Integración de Pago","icon":"credit-card","description":"Facilita transacciones rápidas y seguras."},{"name":"Optimización de Velocidad","icon":"rocket","description":"Carga rápida para mejor experiencia."},{"name":"Consultoría Digital","icon":"chart-line","description":"Estrategias para maximizar ventas online."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en diseños digitales impactantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender más rápido online?","respuesta":"WebGo es experto en digitalización rápida de ventas. Implementamos estrategias innovadoras para que tu negocio en Santiago pase de recomendaciones a ventas online en poco tiempo."},{"pregunta":"¿Qué beneficios obtengo al elegir WebGo para digitalizar mi negocio?","respuesta":"Con WebGo, obtienes rapidez, compromiso y soluciones innovadoras. Nos encargamos de la gestión completa de tu sitio web, para que tú te enfoques en lo que mejor sabes hacer."},{"pregunta":"¿WebGo puede ayudarme si no sé nada de marketing digital?","respuesta":"¡Por supuesto! WebGo está aquí para guiarte. No necesitas ser un experto; nosotros hacemos el trabajo duro para que tu negocio brille online."},{"pregunta":"¿Cuánto cuesta digitalizar mi negocio con WebGo?","respuesta":"El precio de nuestros servicios es de 120. Ofrecemos una excelente relación calidad-precio, asegurando que tu inversión genere resultados tangibles."},{"pregunta":"¿Cómo garantiza WebGo el compromiso con mi negocio?","respuesta":"En WebGo, nos comprometemos a tu éxito. Trabajamos codo a codo contigo, adaptándonos a tus necesidades específicas para que digitalizar tus ventas sea un proceso fácil y efectivo."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio en Línea Hoy" 
                      description="Con WebGo, digitaliza tus ventas rápidamente y sin complicaciones. Lleva tu negocio al siguiente nivel con innovación y compromiso por solo $120."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
