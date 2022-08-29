package com.fgm.h_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
    Triangulo t = new Triangulo(0,0);
    t.setAltura(3);
    t.setBase(7);
        System.out.println("El área es: " + t.area());

        Circulo c = new Circulo();
        c.setRadio(15);
        System.out.println("c.area() Calcula el área del círculo: "+c.area());
    }
}
