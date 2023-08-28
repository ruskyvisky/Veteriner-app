
package veterinerapp.veterinerapp.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@MappedSuperclass
@Data
public class BaseEntity {
    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    @Column(length = 100)
    private UUID id;
}