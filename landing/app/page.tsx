import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  Target,
  CheckCircle,
  Star,
  Calendar,
  User,
} from "lucide-react";
import Link from "next/link";
import Form from "@/components/form";
import Image from "next/image";

export default function TallerEntrevistasLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-sky-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-200 to-sky-200 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-green-700" />
              </div>
              <span className="text-xl font-bold text-gray-800">TallerPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#curso"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                El Curso
              </Link>
              <Link
                href="#facilitadoras"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Facilitadoras
              </Link>
              <Link
                href="#modulos"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Módulos
              </Link>
              <Link
                href="#inscripcion"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Inscripción
              </Link>
            </div>

            <Form className="bg-green-300 hover:bg-green-400 text-green-800 px-4 py-2 rounded-lg hidden md:flex items-center">
              Inscribirse al Taller
            </Form>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-sky-200 text-sky-800 hover:bg-sky-300">
            🌟 Taller Intensivo Práctico
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Preparate para tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-400">
              primera entrevista laboral
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Herramientas prácticas y emocionales para enfrentar entrevistas
            laborales con seguridad y preparación. Dirigido a jóvenes,
            estudiantes y personas en búsqueda de su primer empleo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Form className="bg-green-300 hover:bg-green-400 text-green-800 px-8 py-3 rounded-lg flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Inscribirse al Taller
            </Form>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-500" />
              2-3 horas intensivas
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-sky-500" />
              Grupos reducidos
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2 text-green-500" />
              Metodología práctica
            </div>
          </div>
        </div>
      </section>

      {/* Sobre el Curso */}
      <section id="curso" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¿Por qué este taller?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sabemos que la primera entrevista laboral puede generar ansiedad.
              Te acompañamos con herramientas prácticas y apoyo emocional para
              que llegues preparado/a y confiado/a.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle className="text-green-800">
                  Enfoque Práctico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Simulaciones reales de entrevistas con feedback personalizado
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-sky-50/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="w-6 h-6 text-sky-700" />
                </div>
                <CardTitle className="text-sky-800">Apoyo Emocional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Técnicas para manejar nervios, ansiedad e inseguridad
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle className="text-green-800">CV Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Aprende a crear un CV atractivo sin experiencia previa
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-sky-50/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-sky-700" />
                </div>
                <CardTitle className="text-sky-800">Autoconocimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Identifica tus fortalezas, valores y habilidades únicas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilitadoras */}
      <section id="facilitadoras" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestras Facilitadoras
            </h2>
            <p className="text-lg text-gray-600">
              Profesionales expertas que te acompañarán en tu preparación
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="text-center">
                <picture className=" bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    width={96}
                    height={96}
                    src="/gabriela.jpeg"
                    alt="Gabriela Laviano"
                    className="w-24 h-24 object-cover rounded-full text-green-700"
                  />
                </picture>
                <CardTitle className="text-green-800">
                  Gabriela Laviano
                </CardTitle>
                <CardDescription className="text-green-600 font-medium">
                  Psicóloga Especialista
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Preparación emocional y personal
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Técnicas para reducir ansiedad
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Autoconocimiento y confianza
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Identidad personal y profesional
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-white">
              <CardHeader className="text-center">
                <picture className=" bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    width={96}
                    height={96}
                    src="/andrea.jpeg"
                    alt="Andrea Pintos"
                    className="w-24 h-24 object-cover rounded-full text-green-700"
                  />
                </picture>
                <CardTitle className="text-sky-800">Andrea Pintos</CardTitle>
                <CardDescription className="text-sky-600 font-medium">
                  Profesional en Recursos Humanos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                    Procesos de selección empresarial
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                    Armado de CV profesional
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                    Tendencias del mercado laboral
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                    Simulación de entrevistas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulos del Taller */}
      <section id="modulos" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Programa del Taller
            </h2>
            <p className="text-lg text-gray-600">
              6 módulos estructurados para tu éxito profesional
            </p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-green-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">
                    1. Bienvenida e Introducción
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-green-300 text-green-700"
                  >
                    15-20 min
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Facilitadoras: Gabriela Laviano & Andrea Pintos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Presentación de las facilitadoras</li>
                  <li>• Dinámica rompehielos</li>
                  <li>• Expectativas del grupo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-sky-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sky-800">
                    2. Conociendo el mundo laboral
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-sky-300 text-sky-700"
                  >
                    30 min
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Facilitadora: Andrea Pintos (RRHH)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Qué buscan las empresas hoy</li>
                  <li>• Tipos de empleo y modalidades laborales</li>
                  <li>• Cómo se selecciona a un candidato</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">
                    3. Armado de CV y perfil profesional
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-green-300 text-green-700"
                  >
                    30 min
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Facilitadoras: Andrea Pintos & Gabriela Laviano
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Estructura de un CV atractivo sin experiencia</li>
                  <li>• Fortalezas y habilidades blandas</li>
                  <li>• Actividades extracurriculares</li>
                  <li>• Revisión de ejemplos reales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-sky-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sky-800">
                    4. Preparación emocional y personal
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-sky-300 text-sky-700"
                  >
                    30-40 min
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Facilitadora: Gabriela Laviano (Psicóloga)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Miedos comunes: nervios, inseguridad</li>
                  <li>• Autoconocimiento: fortalezas, valores, logros</li>
                  <li>• Técnicas para reducir la ansiedad</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">
                    5. Simulación de entrevistas
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-green-300 text-green-700"
                  >
                    40-60 min
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Facilitadoras: Gabriela Laviano & Andrea Pintos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Role-playing con preguntas frecuentes</li>
                  <li>• Feedback personalizado</li>
                  <li>• Cómo responder preguntas difíciles</li>
                  <li>
                    • &ldquo;¿Por qué deberíamos contratarte?&rdquo; y más
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-sky-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sky-800">
                    6. Cierre y entrega de recursos
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-sky-300 text-sky-700"
                  >
                    15 min
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Facilitadoras: Gabriela Laviano & Andrea Pintos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Consejos finales</li>
                  <li>• Recursos gratuitos: plantillas, webs, ejemplos</li>
                  <li>• Espacio para preguntas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="inscripcion"
        className="py-20 px-4 bg-gradient-to-r from-green-100 to-sky-100"
      >
        <div className="container mx-auto text-center align-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            ¡No dejes pasar esta oportunidad!
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Invierte en tu futuro profesional. Únete a nuestro taller intensivo
            y da el primer paso hacia el trabajo de tus sueños con confianza y
            preparación.
          </p>
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                Inscripción Abierta
              </div>
              <div className="text-sm text-gray-600">Cupos limitados</div>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Duración: 2-3 horas</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-sky-500 mr-3" />
                <span className="text-gray-700">Grupos reducidos</span>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Metodología práctica</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <Form className="bg-green-300 hover:bg-green-400 text-green-800 px-8 py-3 rounded-lg flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Inscribirse Ahora
            </Form>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ¿Tienes preguntas? Contáctanos para más información
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 mx-auto text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-sky-400 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">TallerPro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Preparamos a jóvenes y estudiantes para su primera entrevista
                laboral con herramientas prácticas y apoyo emocional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold ">Contacto</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 info@tallerpro.com</p>
                <p>📱 +598 99 123 456</p>
                <p>📍 Montevideo, Uruguay</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TallerPro. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
