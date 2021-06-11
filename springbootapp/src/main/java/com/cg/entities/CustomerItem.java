package com.cg.entities;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "customeritem")
public class CustomerItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long itemId;
	@NotNull(message = "name cannot be null")
	private String name;
	@NotNull(message = "color cannot be null")
	private String color;
	@NotNull(message = "category cannot be null")
	private String category;
	@NotNull(message = "quantity cannot be null")
	private Integer quantity;
	@NotNull(message = "material cannot be null")
	private String material;
	@NotNull(message = "description cannot be null")
	private String description;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Customer customer;

	public CustomerItem() {
		super();
	}

	public CustomerItem(Long itemId, @NotNull(message = "name cannot be null") String name,
			@NotNull(message = "color cannot be null") String color,
			@NotNull(message = "category cannot be null") String category,
			@NotNull(message = "quantity cannot be null") Integer quantity,
			@NotNull(message = "material cannot be null") String material,
			@NotNull(message = "description cannot be null") String description, Customer customer) {
		super();
		this.itemId = itemId;
		this.name = name;
		this.color = color;
		this.category = category;
		this.quantity = quantity;
		this.material = material;
		this.description = description;
		this.customer = customer;
	}

	public Long getItemId() {
		return itemId;
	}

	public void setItemId(Long itemId) {
		this.itemId = itemId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
