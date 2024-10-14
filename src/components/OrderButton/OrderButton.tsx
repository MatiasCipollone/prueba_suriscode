import React from "react";
import { I_PropsOrderButton } from "./interface";
import styles from "./styles/OrderButton.module.css";

export const OrderButton: React.FC<I_PropsOrderButton> = ({
  selectedArticles,
  selectedVendor,
}) => {
  const handleSubmit = async () => {
    if (selectedArticles.length === 0) {
      alert("Debes seleccionar al menos un artículo.");
      return;
    }

    if (!selectedVendor) {
      alert("Debes seleccionar un vendedor.");
      return;
    }

    const order = {
      VendedorId: selectedVendor,
      ArticuloCodigos: selectedArticles.map((a) => a.codigo),
    };

    try {
      const response = await fetch("http://localhost:5230/api/pedido", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        alert("Pedido guardado exitosamente.");
      } else {
        alert("Error al guardar el pedido.");
      }
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
    }
  };

  return (
    <button className={styles.button} onClick={handleSubmit}>
      Generar Pedido
    </button>
  );
};
