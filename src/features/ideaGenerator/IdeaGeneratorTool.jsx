import { useState } from "react";
import { useIdeaGenerator } from "./useIdeaGenerator";
import Button from "../../components/common/Button/Button";
import styles from "../Features.module.css"

const IdeaGeneratorTool = () => {
  const [topic, setTopic] = useState("");
  const [numberOfIdeas, setNumberOfIdeas] = useState("3");
  const [contentType, setContentType] = useState("artículos de blog");

  const { ideas, isLoading, error, generateIdeas } = useIdeaGenerator();

  const handleIdeaGenerator = () => {
    generateIdeas(topic, parseInt(numberOfIdeas, 10), contentType);
  };

  return (
    <section>
      <div className={styles.header}>
        <h2>Generador de Ideas para Contenido</h2>
        <p>
          El Resumidor transforma textos extensos en un resumen de texto a tu
          tamaño deseado. ¡No esperes más, resume texto con solo un clic!
        </p>
      </div>
      <label htmlFor="topic">tema o palabra clave principal</label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        disabled={isLoading}
        placeholder="Ej: Inteligencia Artificial en la educación"
      />
      <label htmlFor="numberOfIdeas">cantidad de ideas</label>
      <select
        id="numberOfIdeas"
        value={numberOfIdeas}
        onChange={(e) => setNumberOfIdeas(e.target.value)}
        disabled={isLoading}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label htmlFor="contentType">tipo de contenido</label>
      <input
        type="text"
        name="contentType"
        id="contentType"
        value={contentType}
        onChange={(e) => setContentType(e.target.value)}
        disabled={isLoading}
        placeholder="Ej: artículos de blog, videos de YouTube, tweets"
      />
      <Button onClick={handleIdeaGenerator} disabled={isLoading}>
        {isLoading ? "Generando Ideas..." : "Generar"}
      </Button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {ideas && !isLoading && ideas.length > 0 && (
        <div>
          <h3>Ideas Generadas:</h3>
          <ul>
            {ideas?.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default IdeaGeneratorTool;
