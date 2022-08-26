package EjemplosResumen;

public class EjemploAnimal {
    public static void main(String[] args) {

        Animal miAnimal = new Animal ("Guayabita");

        miAnimal.setEdad(3);

        System.out.println("El nombre es "+miAnimal.getNombre() +" y tiene "+miAnimal.getEdad()+" años.");
    }
}
