package MetPrincipal;

import MenuP.MenuDeOpciones;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        MenuDeOpciones menuOp = new MenuDeOpciones();

        Scanner sc = new Scanner(System.in);
        int op;

        do {
            System.out.println("Elige una opción");
            menuOp.menu();
            op = sc.nextInt();


            switch (op) {
                case 1:
                    Saludo objSaludo = new Saludo();
                    objSaludo.saludar();
                    objSaludo.saludar1();

                    break;
                case 2:
                    Persona objP = new Persona();
                    objP.setNombre("Mia");
                    objP.setEdad(30);
                    objP.setNss(6363);

                    System.out.println(objP.getNombre());
                    System.out.println(objP.getEdad());
                    System.out.println(objP.getNss());
                    break;
                case 3:
                    Fecha objFecha = new Fecha(10, 10, 2010);
                    objFecha.formato();

                    break;
                case 4:
                    System.out.println("Aquí va la actividad del día");
                    break;
                default:
                    System.out.println("Opción no válida");
            }
        }while (op<5);

    }
}
