import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {
        //List - Arraylist
        //Los valores se ordenan en el orden en el que los agregamos y sí aceptan valores duplicados

        //Es una colección de objetos de un mismo tipo

        List<String> meses = new ArrayList<>();

        //.add añade un elemento
        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1, "Abril");

        //.remove quita un elemento y lo devuelve
        String mes = meses.remove(2);


        System.out.println(meses);
        System.out.println(mes);
        System.out.println(meses.get(0));

        //.size() devuelve la longitud del array
        System.out.println(meses.size());

        for (String elemento : meses) {
            System.out.println(elemento);
        }

        //No se puede guardar un primitivo en un array, hay que usar un método llamado boxing
       // List<int> numeros = new ArrayList<int>();

        int num1 = 10;

        //Clase en mayuscula con nombre completo - Clase Wrapper que contiene métodos
        Integer num2 = 10;

        System.out.println(num1 + 10);
        System.out.println(num2 - 5);
        System.out.println(num2.getClass().getSimpleName());

        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(98);
        numeros.add(90);

    }
}