import { I_Article } from "@/models";
import React, { useEffect, useState } from "react";
import { I_PropsArticleList } from "./interface";
import styles from "./styles/Article.module.css";

export const ArticleList: React.FC<I_PropsArticleList> = ({
  selectedArticles,
  setSelectedArticles,
}) => {
  const [articles, setArticles] = useState<I_Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5230/api/Articulos");
        const data = await response.json();
        setArticles(data);
        console.log("Artículos obtenidos:", data);
      } catch (error) {
        console.error("Error al obtener los artículos:", error);
      }
    };
    fetchArticles();
  }, []);

  const handleSelect = (article: I_Article) => {
    if (selectedArticles.includes(article)) {
      setSelectedArticles(selectedArticles.filter((a) => a !== article));
    } else {
      setSelectedArticles([...selectedArticles, article]);
    }
  };

  return (
    <div className={styles.container}>
      <h3>Lista de Artículos</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.codigo} className={styles.listItem}>
            <input
              type="checkbox"
              onChange={() => handleSelect(article)}
              checked={selectedArticles.includes(article)}
              className={styles.checkbox}
            />
            {article.descripcion} -{" "}
            <span className={styles.price}>${article.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
