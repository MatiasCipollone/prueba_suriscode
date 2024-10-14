"use client";
import { I_Article } from "@/models";
import React, { useState } from "react";
import { ArticleList, VendorDropdown, OrderButton } from "@/components";

import styles from "./page.module.css";

const Home: React.FC = () => {
  const [selectedArticles, setSelectedArticles] = useState<I_Article[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<string>("");

  return (
    <div className={styles.container}>
      <h1>Sistema de Compras</h1>
      <ArticleList
        selectedArticles={selectedArticles}
        setSelectedArticles={setSelectedArticles}
      />
      <VendorDropdown
        selectedVendor={selectedVendor}
        setSelectedVendor={setSelectedVendor}
      />
      <OrderButton
        selectedArticles={selectedArticles}
        selectedVendor={selectedVendor}
      />
    </div>
  );
};

export default Home;
