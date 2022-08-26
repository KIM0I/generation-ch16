package MiSaludo;

public class EjemploSaludo {
    public static void main(String[] args) {
Saludo objSaludo; // definir un objeto
objSaludo = new Saludo(); //Asignarle memoria dinámica
        // Otra forma :
        // Saludo objSaludo = new Saludo();
        objSaludo.saludar();

        Saludo objSaludo1 =  new Saludo();

        System.out.println(objSaludo1.saludar1());
        System.out.println("este es otro objeto: " + objSaludo.saludar1());

        System.out.println("objSaludo = " + objSaludo);


    }

}
