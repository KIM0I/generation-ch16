package MiEjemploJava;

public class Persona {
    private String nombre = "Fabi";
    private int edad = 25;
    private int nss = 123;

    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public void setEdad(int edad){
        this.edad = edad;
    }
    public void setNss(int nss){
        this.nss = nss;
    }
    public String getNombre(){
        return nombre;

    }
    public int getEdad(){
            return edad;

    }
    public int getNss(){
           return nss;

    }
}
