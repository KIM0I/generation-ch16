public class EjemploString {
    public static void main(String[] args) {
        String curso = "Curso en java";
        System.out.println("Curso = " + curso );
        String nombre = "Fabi";
        String resultado = new String("Curso en java");
        System.out.println("resultado = " + resultado);

        boolean esigual = curso == resultado;
        System.out.println("esigual = "+esigual);


        //equals sirve para comparar objetos mientras que cuando vamos a comparar cadenas de texto, numeros, caracteres, etc se usa ==
        esigual = curso.equals(resultado);
        System.out.println("esigual = "+esigual);

        String concat = curso +" con "+ nombre;
        System.out.println("Concat = " + concat);
        String dia = "Jueves";
        String concat1 = concat.concat(" ").concat(dia);
        System.out.println("Concat1 = " + concat1);

    }
}
