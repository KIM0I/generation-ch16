package com.generation.fgm.services;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.generation.fgm.repositories.UsuarioRepository;
import com.generation.fgm.models.UsuarioModel;

@Service

public class UsuarioService {
	@Autowired
	UsuarioRepository usuariorepository;
	
	public ArrayList<UsuarioModel> obtenerUsuarios(){
		return (ArrayList<UsuarioModel>)usuariorepository.findAll();
		
	};
	
	
	public UsuarioModel guardarUsuario(UsuarioModel usuario) {
		return usuariorepository.save(usuario);
	}
}
