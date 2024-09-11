import { useEffect, useState } from 'react';
import ImageItem from './ImageItem';

const ApiClient = ({ start, end }) => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('https://primergolpe.com.ar/api/images');
        if (!respuesta.ok) {
          throw new Error(`Error: ${respuesta.statusText}`);
        }
        const resultado = await respuesta.json();
        setDatos(resultado);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []);

  if (cargando) return <div className="text-center pb-32">Cargando</div>;
  if (error) return <div className="text-center">{error}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {datos.slice(start, end).map((item) => (
        <ImageItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ApiClient;
