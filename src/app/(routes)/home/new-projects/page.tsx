"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/app/services/apiInstance";
import { getAuthToken } from "@/app/services/authService";

const NewProjects = () => {
// Obtiene el token de autenticación
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const authToken = getAuthToken(); 


  
  useEffect(() => {
    // Realiza la solicitud GET utilizando la instancia de Axios
    setLoading(true);
    setError(null);

    axiosInstance
      .get("/projects")
      .then((response) => {
        setProjectsData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [authToken]);


  console.log(projectsData);

  return(
    <>hola</>
  )
}

export default NewProjects;
