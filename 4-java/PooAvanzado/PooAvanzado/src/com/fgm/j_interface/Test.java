package com.fgm.j_interface;

public interface Test {
    int CONV = 8;
    void metodo1(int x);
    String metodo2(String s);
}
class Prueba implements Test{

    @Override
    public void metodo1(int x) {
        System.out.println("Hola método 1 parámetro x: " +x);
    }

    @Override
    public String metodo2(String s) {
        return "Este parámetro es s: "+s;
    }
    public void metodoPropio(){
        System.out.println("Soy el método propio");
    }
}