import { I_Article } from "@/models";

export interface I_PropsArticleList {
  selectedArticles: I_Article[];
  setSelectedArticles: (articles: I_Article[]) => void;
}
