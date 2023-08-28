package veterinerapp.entity;

import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

import java.util.UUID;
@MappedSuperclass
@Data
public class BaseEntity {
    @Id
    private UUID id;
}
