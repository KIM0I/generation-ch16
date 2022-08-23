import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        //SET - No permite elementos duplicdos y es la colección que funciona más rápidamente
        //HashSet


        //No guarda los valores en orden
        Set<String> miSet = new HashSet<>();
        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");

        System.out.println(miSet);

        miSet.remove("Felipe");
        System.out.println(miSet);

        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));

        for(String nombre : miSet){
            System.out.println(nombre);
        }

    }
}
