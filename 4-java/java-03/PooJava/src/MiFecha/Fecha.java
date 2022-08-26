package MiFecha;

public class Fecha {
    private int dia;
    private int mes;
    private int anio;

    public Fecha(int dia, int mes, int anio) {
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }

    public String formato(){
        return ("La fecha es: "+dia+"/"+mes+"/"+anio);
    }
}
