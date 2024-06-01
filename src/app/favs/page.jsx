"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import axios from "axios"; // Asegúrate de importar Axios
import "./favs.css";

export default function Favs() {
  const [favs, setFavs] = useState([]);

  const { error, isLoading, user } = useUser();

  useEffect(() => {
    if (user) {
      const email = user.email;
      const APIF = `http://localhost:3100/users/${email}/favsList`;

      const fetchData = async () => {
        try {
          const response = await axios.get(APIF);
          setFavs(response.data.favs); // Actualiza el estado con los datos obtenidos
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      };

      fetchData();
    }
  }, [user]);

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `http://localhost:3100/users/${user.email}/favss`,
        {
          data: { element: item },
        }
      );
      console.log("Favorito eliminado:", response.data);

      // Actualizar el estado de favs sin el elemento eliminado
      const updatedFavs = favs
        .split(", ")
        .filter((fav) => fav !== item)
        .join(", ");
      setFavs(updatedFavs);

      alert("Crypto eliminada");
    } catch (error) {
      console.error("Error al eliminar el favorito:", error);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos del usuario</div>;
  }

  return (
    <div>
      <h1 className="titulo">Favoritos</h1>
      {favs.length > 0 ? (
        <ul>
          {favs.split(", ").map((fav, index) => (
            <li className="card" key={index}>
              {fav}
              <div className="container-detalles">
                <a className="btn">Ver más detalles</a>
                <button className="btn" onClick={() => handleDelete(fav)}>
                  {" "}
                  X{" "}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="err">No tienes favoritos.</p>
      )}
    </div>
  );
}

// crear un usuario = http://localhost:3100/users
/* {
  "first_name": "kerfleixmc",
  "last_name": "eze",
  "email": "kerfleixmc@gmail.com",
  "favs": ""
}
esto te devuelve un objeto con un objeto con un id
 */

// actualizar sus favs = http://localhost:3100/users/id/favs
//{
//  "favs": "bitcoin"
//}

// obtener un usuario = http://localhost:3100/users/id

// eliminar un usuario = http://localhost:3100/users/id/favs
