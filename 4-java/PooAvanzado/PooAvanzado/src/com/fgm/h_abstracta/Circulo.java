package com.fgm.h_abstracta;

public class Circulo extends FigurasGeometricas {


    private double radio;

    public Circulo() {
    }

    public Circulo(double radio) {
        this.radio = radio;
    }

  @Override
  public float area(){
        return (float) (Math.PI * (Math.pow(radio, 2)));
  }
    public void setRadio(double radio) {
        this.radio = radio;
    }

    public double getRadio() {
        return radio;

    }
}
