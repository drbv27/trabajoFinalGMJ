//1. importar createContext y useContex desde react....siempre es igual
import { createContext, useContext } from "react";

//2.Creamos el contexto por lo general se almacena en una contante que tiene
// const NombreContext = createContext();....siempre es igual solo cambia el nombre
const CartContext = createContext();

//3.Creamos un provider que recibe children porque los provider envuelven otros componentes
//Casi siempre se una el mismo NombreProvider....es una funcion de flecha que recibe en parametros children

export const CartProvider = ({ children }) => {
  //4. aqui puedo colocar todo lo que yo voy a compartir
  //puede ser cualquier cosas, valores, estados, funciones etc

  const miNumero = 36;
  return (
    //5.Retornamos el NombreContext.Provider
    //OJO pero el Proveedor debe de envolver el children
    //y en la primera "etiqueta" pasamos como value={{todo lo que vamos a compartir}}
    <CartContext.Provider value={{ miNumero }}>{children}</CartContext.Provider>
  );
};

//6. aqui exportamos el consumidor del contexto (los telefonos)
//normalmente se exporta como hook osea useNombreContext y este retorna useContext(NombreContext)
export const useCartContext = () => {
  return useContext(CartContext);
};

//uds van a crear un contexto nuevo que se comparta un usuario
//el usuario a compartir va a ser su nombre.
