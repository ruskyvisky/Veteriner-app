package veterinerapp.controller;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import veterinerapp.entity.dto.LoginRequest;
import veterinerapp.entity.response.ApiResponse;;

@RestController
@RequestMapping("/auth")
public class Controller {

 public ResponseEntity<ApiResponse> login (LoginRequest loginRequest) {
    return null;// TODO:    return authService.login(authRequest);
 }


}
