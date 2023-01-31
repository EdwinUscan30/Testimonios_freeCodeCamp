import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h2>
          Esto es lo que dicen nuestros alumnos sobre{" "}
          <strong>freeCodeCamp:</strong>{" "}
        </h2>
        <Testimonio
          nombre='Emma'
          imagen='1'
          cargo='Ingenieria de Software'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado
        muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
        Estudiar JavaScript, así como estructuras de datos y algoritmos en
        freeCodeCamp me dio las habilidades y la confianza que necesitaba para
        conseguir el trabajo de mis sueños como ingeniero de software en
        Spotify.'
        />
        <Testimonio
          nombre='Cecy Alvarez'
          imagen='3'
          cargo='Entrenadora Personal'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado
         muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
         Estudiar JavaScript, así como estructuras de datos y algoritmos en
         freeCodeCamp me dio las habilidades y la confianza que necesitaba para
         conseguir el trabajo de mis sueños como ingeniero de software en
         Spotify.'
        />
        <Testimonio
          nombre='Sarah'
          imagen='2'
          cargo='Ingenieria de Software'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado
          muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
          Estudiar JavaScript, así como estructuras de datos y algoritmos en
          freeCodeCamp me dio las habilidades y la confianza que necesitaba para
          conseguir el trabajo de mis sueños como ingeniero de software en
          Spotify.'
        />
      </div>
    </div>
  );
}

export default App;
