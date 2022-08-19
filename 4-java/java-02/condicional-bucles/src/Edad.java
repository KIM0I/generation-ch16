import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("esta es la clase Edad");

        //Determinar si una persona es mayor de edad
        //Pedir la edad al usuario
        //Condicional para saber si es mayor o menor de edad

        //prompt  -  Scanner

        Scanner escaner = new Scanner(System.in); //Instanciar - Crear un objeto a partir de una clase
        System.out.println("Escribe tu edad: ");
        int edad = escaner.nextInt();
        escaner.close(); //Es buena práctica cerrar los Scanner para que no siga pidiendo información

        if (edad >= 18){
            System.out.println("Eres mayor de edad");
        }else {
            System.out.println("Eres menor de edad");
        }

        //Operador ternario
        String resultado = (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);

    }
}
