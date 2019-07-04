<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource(
 *     mercure=true,
 *     attributes={
 *         "normalization_context"={"groups"={"product", "food_stuff:read"}},
 *         "denormalizationContext"={"groups"={"product", "food_stuff:write"}}
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @ApiFilter(SearchFilter::class, properties={"category": "exact"})
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"product"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"product"})
     */
    private $brand;

    /**
     * @ORM\Column(type="text")
     * @Groups({"product"})
     */
    private $description;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"product"})
     */
    private $discountedPrice;

    /**
     * @ORM\Column(type="float")
     * @Groups({"product"})
     */
    private $price;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"product"})
     */
    private $quantity;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"product"})
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"product"})
     */
    private $size;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"product"})
     */
    private $discount;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"product"})
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"product"})
     */
    private $category;


    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(string $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(string $brand): self
    {
        $this->brand = $brand;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getDiscountedPrice(): ?float
    {
        return $this->discountedPrice;
    }

    public function setDiscountedPrice(?float $discountedPrice): self
    {
        $this->discountedPrice = $discountedPrice;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(?int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(?string $category): self
    {
        $this->category = $category;

        return $this;
    }
}
