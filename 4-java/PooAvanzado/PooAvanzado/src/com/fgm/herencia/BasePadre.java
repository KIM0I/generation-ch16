package com.fgm.herencia;

public class BasePadre {
    protected int a;
    private double b;

    private String c;

    public BasePadre() {
    }

    public void visualizarA(){
        System.out.println("El valor de a es: " + a);
    }
    public void visualizarABC(){
        System.out.println("El valor de a es: "+ a);
        System.out.println("El valor de b es: "+ b);
        System.out.println("El valor de b es: "+c);
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}

