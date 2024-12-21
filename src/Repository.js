const Repository = {
  inventories: [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MT7-e4Ntj8gXclp84OSPDIQcv18qrB-4QREgRyg_4sYFA7MbmpSCqOF5N_gf7tpblqfoPLXvB2an_BXvDNJem6eeFalTM8kAEi26LWv7',
      name: '새우깡',
      user: '홍길동',
      quantity: 10,
      startDate: new Date('2023-11-22'),
      endDate: new Date('2023-12-02'),
    },
    {
      id: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgtdtyxCJzl_PJFwCZIE5ZZCS8uRNrhB2fQK4SaNQwWhuFOLJEAEuJ3zNFTSyze2q4VAPEzMy7HO2UmTf-wkrcKPYTo26JqonpX-JARgt',
      name: '코카콜라',
      user: '김민수',
      quantity: 5,
      startDate: new Date('2023-11-25'),
      endDate: new Date('2023-12-10'),
    },
    {
      id: 3,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dXRcejj-bbGhcOIV_RkfS9u0mZIs07xIGqdoE7irQWMjn98XqN1cCDLnzsuhs4nsiDXHZX2lUJxTgzKLNe9PK_r3Np3OpIDhm9GQnrQ',
      name: '사과',
      user: '박창섭',
      quantity: 3,
      startDate: new Date('2023-11-28'),
      endDate: new Date('2023-12-05'),
    },
    {
      id: 4,
      image:
        'https://i.namu.wiki/i/Oxc7aQyc2WwOCR9KKFbaDBMkQpZYuyT0T-BeSggfINXRCOKV9TrGHQ8eMkb6JLe-pjmLwZnfEjMfXTyiXKQKTbU82OIqlfIcmR95WoZGICB3iOrV9QPsAnIiGsR81QX30zhEONJXyV_FsJ_xa1udBA.webp',
      name: '감자깡',
      user: '김철수',
      quantity: 15,
      startDate: new Date('2023-11-23'),
      endDate: new Date('2023-12-03'),
    },
    {
      id: 5,
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRn8PcYERE032GQX-9tv_5ywG5bMKTMsey-Z1IPIR_pEbbCYawLTUQIh8KRjxat0bD6DgfjuH9ccjvzlVm3uZ6W6JjhxpOThgKQwWlNvchv',
      name: '치토스',
      user: '이영희',
      quantity: 8,
      startDate: new Date('2023-11-24'),
      endDate: new Date('2023-12-04'),
    },
    {
      id: 6,
      image:
        'https://i.namu.wiki/i/RvZPji91bjS47aoRG2Y8KTvcTDEIGwQmgv7R_vO0x1w2dqEWXmWBJkTsg3nyjZ4fOFMCPxirr7ehs_rM-swJmkWr_GmQewc1mxGPPad4ShnnpOqsFGU2eKxEruBNO2Ok8HT6FiTdGhFFdpkrIshO7Q.webp',
      name: '포카칩',
      user: '박민수',
      quantity: 20,
      startDate: new Date('2023-11-25'),
      endDate: new Date('2023-12-05'),
    },
    {
      id: 7,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Chocolate_Pie.jpg/220px-Chocolate_Pie.jpg',
      name: '초코파이',
      user: '이영희',
      quantity: 12,
      startDate: new Date('2023-11-26'),
      endDate: new Date('2023-12-06'),
    },
    {
      id: 8,
      image:
        'https://i.namu.wiki/i/k8rH5wYbFuB0htoxEKiQKea8bY2T_qUwJTcfSf073le7H86k3ON83VBF3-AA5VSzIsDjxFCqWKOuPjvsZaKwjUgAr2sgvTSVgW2v14MmsrGCTPpTiRgHEvomFeFTCwDv7VsJD3hzjLdJyib2hNcm9A.webp',
      name: '오징어칩',
      user: '정우성',
      quantity: 9,
      startDate: new Date('2023-11-27'),
      endDate: new Date('2023-12-07'),
    },
    {
      id: 9,
      image:
        'https://i.namu.wiki/i/4FjAruSIy2a7qocFLtLDhKwIJFh-PoWsK2oSfAVPmOFZoZTrQIIsmpoJUG0YaO8mpSIQZi9JlQvfkOkJguS9dG_w9bkggygdqIprhZhB__fjwpupgUr9wwX13W1n-BuFIGaQYTZVfb6nMu1MYC03Jg.webp',
      name: '바나나킥',
      user: '강하늘',
      quantity: 14,
      startDate: new Date('2023-11-28'),
      endDate: new Date('2023-12-08'),
    },
    {
      id: 10,
      image:
        'https://i.namu.wiki/i/4oVoaFQadoQokOQUrqeHcXiAyw1yBxybGswThVeVfEp-KkeaEUBZX8uqsRuyJhXniydolO_t0s-U3hCV0OzhfPPU4coHmv5dPB4XlIHZiz4flxE79efuNbAmzITLwP6ndAJLaw0eq_mZspQS5-M7Gw.webp',
      name: '촉촉한 초코칩',
      user: '윤아름',
      quantity: 6,
      startDate: new Date('2023-11-29'),
      endDate: new Date('2023-12-09'),
    },
    {
      id: 11,
      image:
        'https://i.namu.wiki/i/Y-7uelhv0PXFJ3Ajx_Z8_02OgB8bCtj7x-ITuZKBJtQ5e6yXkoTtsE92z-Jd5qa3wuirfgKIDExDIaOLlqMCaRgzQlEr3kcgguUPiIsMezO7rg7KEYGBXGhElbXMc5-h2XEb2EaJ8oGwI8GzHQ5JJA.webp',
      name: '오사쯔',
      user: '남궁민',
      quantity: 18,
      startDate: new Date('2023-11-30'),
      endDate: new Date('2023-12-10'),
    },
    {
      id: 12,
      image:
        'https://i.namu.wiki/i/meTuUAnwJ924WsSI1IZ3xLpxRLAuAQObWJQQIba0EaslABqb8VXXoRMxjxQwok6HahpdhaXGkauCv8xegJluF2VOEVwG49iW-4Cq2ke-W8rLKcGxDseSfRT9eRz2Z5ZbK7FjVO5bilSA23Fk3znNBw.webp',
      name: '땅콩강정',
      user: '송지효',
      quantity: 11,
      startDate: new Date('2023-12-01'),
      endDate: new Date('2023-12-11'),
    },
    {
      id: 13,
      image:
        'https://i.namu.wiki/i/9fhYk4s2GPRSQ66fvKSZ5xvxA0WzO-SqWy0wmAbm7zPuSWUMAE14cDUxeIf2mgM4vTADVhEt4wgiwIy7CMJK18Ku7Bln8-3KuJ3FbtoYYxG1cP3-QeCITraMDmH2w9y_yAb4SCqrzbhM99vwHUg0-A.webp',
      name: '맛동산',
      user: '조인성',
      quantity: 7,
      startDate: new Date('2023-12-02'),
      endDate: new Date('2023-12-12'),
    },
    {
      id: 14,
      image:
        'https://i.namu.wiki/i/SZGE6yATTen30q5GyLP_672_P4-57D02uh7fQ32TRiXx5XWE_JfqN9WbGYR0iKENsjDgPLkGuTVqF-V4D144lDLVY6hxEbzy3xfYgnVCwmmdanNukqfRLBj8aYIBn8Wp-DjaDzTTxYUE796O3R2bUw.webp',
      name: '콘칩',
      user: '유재석',
      quantity: 10,
      startDate: new Date('2023-12-03'),
      endDate: new Date('2023-12-13'),
    },
    {
      id: 15,
      image:
        'https://i.namu.wiki/i/n3m7SCK_iVAGCXOcMR8XgaGpuXsAuXmVkYuSOhND3TaQ4IFJvwrvzAV1fHwOLbFVRvCRKhIvI3HVFyEUsZ_7I8ElGf37sBv4x_r-I2p93GVvNNV4-i7sScRv2LuhepJl_-e2S5ZKmlkwyAP6AS20Cw.webp',
      name: '포스틱',
      user: '김종국',
      quantity: 5,
      startDate: new Date('2023-12-04'),
      endDate: new Date('2023-12-14'),
    },
  ],
};

export default Repository;
