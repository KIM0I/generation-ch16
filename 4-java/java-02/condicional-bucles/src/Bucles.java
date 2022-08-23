import java.util.*; // Importar todas las clases del paquete útil

public class Bucles {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++ ){
            System.out.println(i);
        }

        //while - bucle no controlado

        //Mientras la condicion sea true

        // ==  != estamos comparando valores primitivos, dentro de Java un string es un objeto, NO un dato primitivo
       String condicion  = "";
        Scanner sc = new Scanner(System.in);


        while (!Objects.equals(condicion, "Hola")){

            System.out.println("Salúdame");
            condicion = sc.next();

        }

    }
}
