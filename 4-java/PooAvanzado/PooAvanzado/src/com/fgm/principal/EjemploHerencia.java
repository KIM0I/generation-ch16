package com.fgm.principal;

import com.fgm.herencia.BasePadre;
import com.fgm.herencia.Ejecutar;
import com.fgm.herencia.Hija;
import com.fgm.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        Ejecutar ejecutar=new Ejecutar();
        ejecutar.ejecutar();

        Hija objH = new Hija();
        objH.visualizarA();

        Hijo objHo = new Hijo();
        objHo.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(636);

        System.out.println("Atributo de clase base: "+objH.getA());

    }
}
