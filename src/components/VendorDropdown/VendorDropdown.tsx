import { I_Vendor } from "@/models";
import React, { useEffect, useState } from "react";
import { I_PropsVendorDropdown } from "./interface";
import styles from "./styles/VendorDropdown.module.css";

export const VendorDropdown: React.FC<I_PropsVendorDropdown> = ({
  selectedVendor,
  setSelectedVendor,
}) => {
  const [vendors, setVendors] = useState<I_Vendor[]>([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch("http://localhost:5230/api/Vendedores");
        const data = await response.json();
        setVendors(data);
      } catch (error) {
        console.error("Error al obtener los vendedores:", error);
      }
    };
    fetchVendors();
  }, []);

  return (
    <div className={styles.container}>
      <h3>Selecciona un Vendedor</h3>
      <select
        value={selectedVendor}
        onChange={(e) => setSelectedVendor(e.target.value)}
        className={styles.select}
      >
        <option value="">-- Selecciona un vendedor --</option>
        {vendors.map((vendor) => (
          <option key={vendor.id} value={vendor.id}>
            {vendor.descripcion}
          </option>
        ))}
      </select>
    </div>
  );
};
