package veterinerapp.auth.Requests;

import java.time.LocalDateTime;
import java.util.UUID;
import veterinerapp.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String password;
    private String name;
    private String surname;
    private String phoneNumber;
    private boolean isActive = true;
    private Role role = Role.USER;


}
