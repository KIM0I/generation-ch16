package com.fgm.h_abstracta;

//Class abstract usa métodos abstractos, es decir que no hay una definición del método

public abstract class FigurasGeometricas {
    private String nombre;

    public abstract float area();

    public FigurasGeometricas(String nombre){
        this.nombre = nombre;
    }
        @Override
        public String toString(){
            return nombre  + "area -> " + area();
    }

}
