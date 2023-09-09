package veterinerapp.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;
@MappedSuperclass
@Data
public class BaseEntity {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "BINARY(16)", updatable = false, nullable = false)
    private UUID id;

}
