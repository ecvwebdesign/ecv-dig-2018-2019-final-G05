<?php

namespace App\Repository;

use App\Entity\ShopOrder;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ShopOrder|null find($id, $lockMode = null, $lockVersion = null)
 * @method ShopOrder|null findOneBy(array $criteria, array $orderBy = null)
 * @method ShopOrder[]    findAll()
 * @method ShopOrder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ShopOrderRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ShopOrder::class);
    }

    // /**
    //  * @return ShopOrder[] Returns an array of ShopOrder objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Order
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
