package MiEjemploJava;

public class Persona {
    private String nombre = "Fabi";
    private int edad = 25;
    private int nss = 123;


    }

    Persona () {

    }
    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;

    }
    public void caminar(){
            System.out.println("Caminar");

    }
    public void dormir(){
            System.out.println("Dormir");

    }
}
