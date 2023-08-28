package veterinerapp.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {

    private String username;
    private String password;
    private String name;
    private String surname;
    private String phoneNumber;
    private boolean isActive = true;
}
