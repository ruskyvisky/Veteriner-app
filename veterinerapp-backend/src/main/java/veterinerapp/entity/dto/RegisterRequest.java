package veterinerapp.entity.dto;

import java.util.UUID;

import lombok.Data;

@Data
public class RegisterRequest {

    private UUID id;
    private String username;
    private String password;
    private String name;
    private String surname;
    private String phoneNumber;
    private boolean isActive;
    
}
