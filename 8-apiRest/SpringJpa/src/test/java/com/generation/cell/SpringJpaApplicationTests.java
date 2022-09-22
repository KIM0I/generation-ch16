package com.generation.cell;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.generation.cell.models.UsuarioModel;
import com.generation.cell.repository.UsuarioRepository;
import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
class SpringJpaApplicationTests {
	
	@Autowired 
	private UsuarioRepository ur; 
	@Test
	void crearUsuarioTest() {
		UsuarioModel usuariomodelo = New UsuarioModel();
		
		usuariomodelo.setId(0);
		usuariomodelo.setNombre("Victor");
		usuariomodelo.setClave("1234");
		
	
		UsuarioModel r = usuariorepository.save(usuariomodelo);
		
		assertTrue(r.getClave().equalsIgnoreCase(usuariomodelo.getNombre()));
	}
	

}
