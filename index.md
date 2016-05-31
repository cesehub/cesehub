---
layout: post
title: Home
cover: cover.gif
date: 2016-05-29 07:00:00 +0800
permalink: /
---

## Background


The engineering research and design requirements of today pose great challenges in computer simulation to engineers and scientists who are called on to analyse phenomena in continuum mechanics. The future will bring even more daunting challenges, when increasingly complex phenomena must be analysed with increased accuracy. Traditionally used numerical simulation methods have evolved to their present state by repeated incremental extensions to broaden their scope. A broadly conceived method is needed to meet future simulation challenges.

At NASA GRC, researchers have been developing a new numerical framework for solving conservation laws in continuum mechanics, namely, the Space-Time Conservation Element and Solution Element Method, or the CE/SE method for short. This method has been built from fundamentals, and not as a modification of any previously existing method. It has been designed with generality, simplicity, robustness and accuracy as cornerstones.

The CE/SE method has thus far been applied in the fields of computational fluid dynamics, computational aeroacoustics and computational electromagnetics. Computer programs based on the CE/SE method have been developed for calculating flows in one, two and three spatial dimensions. Numerous results have been obtained, including various shock tube problems, the ZND detonation waves, the implosion and explosion problem, shocks over a forward-facing step, the blast wave issuing from a nozzle, various acoustic waves, and shock/acoustic wave interactions. The method can clearly resolve shock/acoustic wave interactions wherein the difference of the magnitude between acoustic wave and shock could be up to six orders. In two-dimensional flows, the reflected shock is as crisp as the leading shock. CE/SE schemes are currently being used for advanced application to jet and fan noise prediction and to chemically reacting flows.

A list of key features and advantages of the CE/SE method follows.

* Space and time are treated in a unified fashion. The space-time domain is discretized into Solution Elements (SEs), within which the numerical approximant is a simple (linear, for example) function of space and time. Conservation Elements (CEs) that fill the space-time domain without overlap are also defined. Each "face" of a CE is a hypersurface in space-time. Any point on a face of a CE belongs unambiguously to a single SE.

* The main emphasis is on solving the integral form of the conservation law in the space-time domain, although the differential form is also considered. As a direct statement of the integral form, conservation of space-time flux is enforced for each CE. Because the CEs fill space-time without overlap, and because the flux through any face of a CE is uniquely defined, this local conservation of flux ensures that space-time flux is conserved globally in the space-time domain. Traditional methods that address flux conservation focus only on the conservation of spatial flux.

* The method is very simply described in terms of the geometry of the space-time discretization. Only the simplest numerical approximation techniques are used. No knowledge of the properties of the solution, such as the characteristics or the shock-wave profile, are used in the construction of schemes. Use of the properties would complicate the scheme and prevent it from being general. Such solution properties should automatically be manifested in the numerical solution obtained by a faithful discretization of the conservation law.

* A staggered space-time mesh is employed, such that inviscid flux information at each interface separating two CEs can be evaluated without interpolation or extrapolation. In particular, no Riemann solver is needed in calculating interfacial fluxes.

* The solution structure is not calculated through a reconstruction procedure, as is done in modern upwind methods. Instead, the gradients of the solution are treated as independent unknowns. For hyperbolic problems, the gradients are not influenced by the solution properties in neighboring SEs at the same time level. This is in full compliance with the physics of the hyperbolic initial value problem.

* For simulation of isentropic, inviscid flow, the CE/SE method can be used to construct explicit solvers that are non-dissipative (neutrally stable) for all Courant numbers less than or equal to unity. Also, these solvers are two-way time-marching schemes, i.e., each forward marching scheme can be inverted to become a scheme for marching backward in time.

* The schemes for nonisentropic flow are constructed with the addition of artificial dissipation. The artificial dissipation associated with the inviscid fluxes is completely controlled by an adjustable parameter. When the added artificial dissipation is set to zero, the inviscid scheme reduces to the non-dissipative version, which has no inherent artificial dissipation. Thus, the artificial dissipation can be made as small as desired. Such a property is essential for the accurate calculation of acoustic waves and thin boundary layers. Too much artificial dissipation would damp or smear out such physical phenomena in the numerical solution.

* The various CE/SE schemes constructed to solve model 1D convection or convection-diffusion equations display some remarkable properties. For example, in various limiting cases, the principal amplification factor obtained by a von Neumann stability analysis of the schemes coincides with the amplification factor of various classical schemes, viz., the Leapfrog, the Lax, the Crank-Nicolson and the DuFort-Frankel schemes. However, the CE/SE schemes are completely distinct from each of the latter schemes.

* Systems of conservation laws are treated in exactly the same way as single conservation laws, so that the discretized equation for a single law can be symbolically transformed into that for a system by replacing scalars with appropriate matrices. This fact is another manifestation of the simplicity of the CE/SE method.

* The flux-based nature of the method leads to the use of flux-based boundary conditions. The non-reflecting boundary conditions needed for practical computations on unbounded spatial domains are remarkable for their simplicity, needing only a few lines in the computer program. No characteristic theory is employed in their construction. These conditions allow even shock waves to pass out of the domain with no noticeable reflection at the boundary. In contrast to this, non-reflecting boundary conditions for traditional methods, based on characteristic theory, can constitute the major part of the computer program. Furthermore, the latter conditions are not applicable to shock waves.

* For flows in multiple spatial dimensions, no directional splitting is employed. The CE/SE method results in genuinely multidimensional schemes. Furthermore, identical principles are used in multiple dimensions, so that the resulting schemes bear a remarkable resemblance to their 1D counterparts. Furthermore, the multidimensional schemes share with their 1D counterparts virtually identical fundamental properties.

* No global coordinate mappings are employed. The two- and three-dimensional spatial meshes employed by the present method are built from triangles and tetrahedrons, respectively. Triangles and tetrahedrons, respectively, are also the simplest building blocks for two- and three-dimensional unstructured meshes. Thus, the multidimensional schemes can be directly applied on the unstructured meshes that offer an efficient way to deal with complex geometries.

* The simplicity of the CE/SE schemes makes the computer programs easy to vectorize and parallelize. With little programming effort, the programs can deliver quick results on advanced-architecture computer systems.

Thank you for visiting our web site.
