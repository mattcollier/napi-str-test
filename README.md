### Build and Run
```
nj-cli build --release
npm start
```

### Test results on Ryzen 5 3600
```
buffer [SIZE=10] x 2,881,839 ops/sec ±0.41% (142 runs sampled)
string [SIZE=10] x 2,393,507 ops/sec ±0.37% (141 runs sampled)
buffer [SIZE=20] x 2,865,882 ops/sec ±0.41% (141 runs sampled)
string [SIZE=20] x 2,325,797 ops/sec ±0.35% (142 runs sampled)
buffer [SIZE=40] x 2,872,910 ops/sec ±0.60% (139 runs sampled)
string [SIZE=40] x 2,276,048 ops/sec ±0.28% (143 runs sampled)
buffer [SIZE=80] x 2,818,727 ops/sec ±0.26% (141 runs sampled)
string [SIZE=80] x 2,135,875 ops/sec ±0.43% (141 runs sampled)
buffer [SIZE=160] x 2,585,540 ops/sec ±0.76% (140 runs sampled)
string [SIZE=160] x 1,950,958 ops/sec ±0.40% (141 runs sampled)
buffer [SIZE=320] x 2,458,775 ops/sec ±0.42% (140 runs sampled)
string [SIZE=320] x 1,631,646 ops/sec ±0.92% (139 runs sampled)
buffer [SIZE=640] x 2,019,951 ops/sec ±0.99% (140 runs sampled)
string [SIZE=640] x 1,344,898 ops/sec ±0.69% (140 runs sampled)
buffer [SIZE=1280] x 1,386,453 ops/sec ±1.00% (137 runs sampled)
string [SIZE=1280] x 946,600 ops/sec ±0.83% (142 runs sampled)
buffer [SIZE=2560] x 1,030,685 ops/sec ±1.09% (138 runs sampled)
string [SIZE=2560] x 654,931 ops/sec ±0.94% (138 runs sampled)
buffer [SIZE=5120] x 670,397 ops/sec ±1.08% (137 runs sampled)
string [SIZE=5120] x 430,227 ops/sec ±0.96% (138 runs sampled)
buffer [SIZE=10240] x 406,389 ops/sec ±0.95% (137 runs sampled)
string [SIZE=10240] x 259,988 ops/sec ±0.87% (141 runs sampled)
buffer [SIZE=20480] x 226,322 ops/sec ±0.96% (138 runs sampled)
string [SIZE=20480] x 138,818 ops/sec ±1.03% (138 runs sampled)
buffer [SIZE=40960] x 114,423 ops/sec ±1.12% (136 runs sampled)
string [SIZE=40960] x 70,701 ops/sec ±1.13% (138 runs sampled)
buffer [SIZE=81920] x 59,156 ops/sec ±1.03% (136 runs sampled)
string [SIZE=81920] x 36,316 ops/sec ±1.02% (139 runs sampled)
buffer [SIZE=163840] x 14,280 ops/sec ±1.23% (137 runs sampled)
string [SIZE=163840] x 10,725 ops/sec ±1.11% (137 runs sampled)
buffer [SIZE=327680] x 7,513 ops/sec ±1.10% (135 runs sampled)
string [SIZE=327680] x 5,351 ops/sec ±1.30% (133 runs sampled)
buffer [SIZE=655360] x 3,873 ops/sec ±1.13% (136 runs sampled)
string [SIZE=655360] x 2,755 ops/sec ±1.24% (131 runs sampled)
buffer [SIZE=1310720] x 1,910 ops/sec ±1.31% (136 runs sampled)
string [SIZE=1310720] x 920 ops/sec ±0.96% (136 runs sampled)
buffer [SIZE=2621440] x 894 ops/sec ±1.31% (132 runs sampled)
string [SIZE=2621440] x 416 ops/sec ±1.06% (131 runs sampled)
buffer [SIZE=5242880] x 386 ops/sec ±1.04% (130 runs sampled)
string [SIZE=5242880] x 179 ops/sec ±0.88% (129 runs sampled)
```
