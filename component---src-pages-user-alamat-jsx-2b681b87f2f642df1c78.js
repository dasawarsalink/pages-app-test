(self.webpackChunkmainserv=self.webpackChunkmainserv||[]).push([[2291],{8880:function(e,t,n){"use strict";var a=n(5318),l=n(862);t.Z=void 0;var r=l(n(7294)),i=(0,a(n(8786)).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},9928:function(e,t,n){"use strict";n.r(t);var a=n(9321),l=n(6422),r=n(1448),i=n(3332),u=n(5733),c=n(791),m=n(4381),o=n(8030),d=n(4997),s=n(1690),E=n(1218),Z=n(706),v=n(453),f=n(9952),p=n(4256),y=n(1114),h=n(5444),g=n(7294),k=(n(3405),n(5255)),b=n(4171),w=n(3501),C=n(2874),W=n(4729),S=n(3815),A=n(8880),P=n(1768),x=function(e){var t=e.inquiry,n=e.open,p=e.onClose,y=e.onAction,h=(0,b.P)(),C=((0,w.ZE)(),g.useState("")),W=C[0],A=C[1],P=g.useState(""),x=P[0],N=P[1],M=g.useState(""),D=M[0],I=M[1],B=g.useState(""),H=B[0],K=B[1],R=g.useState(null),F=R[0],G=R[1],L=g.useState(null),Y=L[0],$=L[1],q=g.useState(null),z=q[0],J=q[1],T=g.useState(null),V=T[0],j=T[1],O=g.useState(""),Q=O[0],U=O[1],X=g.useState(""),_=X[0],ee=X[1],te=g.useState(""),ne=te[0],ae=te[1],le=[(0,k.w)("/desa/geolookup"),(0,k.w)(F&&"/desa/geolookup?id="+F),(0,k.w)(Y&&"/desa/geolookup?id="+Y),(0,k.w)(z&&"/desa/geolookup?id="+z)],re=le[0],ie=le[1],ue=le[2],ce=le[3],me=[g.useMemo((function(){return F&&re?re.descendants.find((function(e){return e.id==F})).name:""}),[F,re]),g.useMemo((function(){return Y&&ie?ie.descendants.find((function(e){return e.id==Y})).name:""}),[Y,ie]),g.useMemo((function(){return z&&ue?ue.descendants.find((function(e){return e.id==z})).name:""}),[z,ue]),g.useMemo((function(){return V&&ce?ce.descendants.find((function(e){return e.id==V})).name:""}),[V,ce])],oe=me[0],de=me[1],se=me[2],Ee=me[3];g.useEffect((function(){if(t){var e=t.geocode;e||(e=h?h.account.geocode||h.nik.substr(0,6):""),A(t.label),N(t.name||h.name),I(t.phone||h.phone),K(t.email),G(e.substr(0,2)),$(e.substr(0,4)),J(e.substr(0,6)),j(e.length>6?e:""),U(t.street),ee(t.complement),ae(t.postal)}}),[t]);return g.createElement(a.Z,{open:n,onClose:p,scroll:"body",fullWidth:!0,maxWidth:!1},g.createElement(l.Z,null,g.createElement(r.Z,{display:"flex"},null!=t&&t.id?"Edit Alamat":"Masukkan Alamat",g.createElement(r.Z,{flexGrow:1}),(null==t?void 0:t.id)&&(null==t?void 0:t.id)!==(null==h?void 0:h.account.address)&&g.createElement(i.Z,{onClick:function(){(0,S.A$)("Yakin ingin alamat ini default?").then((function(e){e&&y({action:"makeDefault"})}))},variant:"outlined",color:"secondary"},"Jadikan Default"))),g.createElement(u.Z,null,g.createElement(c.Z,null,g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Label",secondary:"Rumah/kantor/dsb"}),g.createElement(d.Z,null,g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(E.Z,{value:W,onChange:function(e){return A(e.target.value)}})))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Nama",secondary:"Nama lengkap"}),g.createElement(d.Z,null,g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(E.Z,{value:x,onChange:function(e){return N(e.target.value)}})))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Nomor HP",secondary:"Nomor HP aktif"}),g.createElement(d.Z,null,g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(E.Z,{value:D,onChange:function(e){return I(e.target.value)}})))),g.createElement(m.Z,{divider:!0},g.createElement(o.Z,{primary:"Email",secondary:"Email aktif (opsional)"}),g.createElement(d.Z,null,g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(E.Z,{value:H,onChange:function(e){return K(e.target.value)}})))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Negara"}),g.createElement(d.Z,null,g.createElement(s.Z,{disabled:!0,style:{minWidth:"40vw"}},g.createElement(E.Z,{value:"Indonesia"})))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Provinsi"}),g.createElement(d.Z,null,g.createElement(s.Z,{disabled:!re,style:{minWidth:"40vw"}},g.createElement(Z.Z,{native:!0,value:F,onChange:function(e){G(e.target.value),$(null),J(null),j(null)}},g.createElement("option",{value:""}),re?re.descendants.map((function(e){return g.createElement("option",{key:e.id,value:e.id},e.name)})):[])))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Kabupaten"}),g.createElement(d.Z,null,g.createElement(s.Z,{disabled:!ie,style:{minWidth:"40vw"}},g.createElement(Z.Z,{native:!0,value:Y,onChange:function(e){$(e.target.value),J(null),j(null)}},g.createElement("option",{value:""}),ie?ie.descendants.map((function(e){return g.createElement("option",{key:e.id,value:e.id},e.name)})):[])))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Kecamatan"}),g.createElement(d.Z,null,g.createElement(s.Z,{disabled:!ue,style:{minWidth:"40vw"}},g.createElement(Z.Z,{native:!0,value:z,onChange:function(e){J(e.target.value),j(null)}},g.createElement("option",{value:""}),ue?ue.descendants.map((function(e){return g.createElement("option",{key:e.id,value:e.id},e.name)})):[])))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Desa"}),g.createElement(d.Z,null,g.createElement(s.Z,{disabled:!ce,style:{minWidth:"40vw"}},g.createElement(Z.Z,{native:!0,value:V,onChange:function(e){j(e.target.value)}},g.createElement("option",{value:""}),ce?ce.descendants.map((function(e){return g.createElement("option",{key:e.id,value:e.id},e.name)})):[])))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Jalan",secondary:"No. RT/RW/Blok"}),g.createElement(d.Z,null,g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(E.Z,{value:Q,onChange:function(e){return U(e.target.value)}}))))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Kompleks",secondary:"Nama Ruko/Gedung"}),g.createElement(d.Z,null,g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(E.Z,{value:_,onChange:function(e){return ee(e.target.value)}}))))),g.createElement(m.Z,null,g.createElement(o.Z,{primary:"Kode Pos"}),g.createElement(d.Z,null,g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(s.Z,{style:{minWidth:"40vw"}},g.createElement(E.Z,{value:ne,onChange:function(e){return ae(e.target.value)}}))))),g.createElement(m.Z,null,g.createElement("div",null,g.createElement(o.Z,{primary:"Contoh Penulisan Alamat"}),g.createElement(v.Z,{style:{marginLeft:"40px"}},g.createElement("b",null,x),g.createElement("br",null),H," / ",D,",",g.createElement("br",null),_,", ",Q,",",g.createElement("br",null),Ee,", ",se,", ",de,", ",g.createElement("br",null),oe,", ",ne,g.createElement("br",null)))))),g.createElement(f.Z,null,(null==t?void 0:t.id)&&g.createElement(i.Z,{onClick:function(){(0,S.A$)("Yakin ingin menghapus alamat ini?").then((function(e){e&&y({action:"delete"})}))},variant:"outlined",color:"secondary"},"Hapus"),g.createElement(r.Z,{flexGrow:1}),g.createElement(i.Z,{onClick:p,color:"primary"},"Batal"),g.createElement(i.Z,{onClick:function(e){y({action:"update",label:W,name:x,phone:D,email:H,geocode:V,country:"Indonesia",state:oe,region:de,city:se,district:Ee,street:Q,complement:_,coordinate:null,postal:ne})},variant:"contained",color:"primary",disabled:!(Ee&&W&&x&&Q&&D&&parseInt(ne)&&_)},"Simpan")))};t.default=function(){var e=(0,b.P)(),t=g.useState(1),n=t[0],a=t[1],l=(0,k.w)("/market/address/?refresh="+n),u=g.useState(null),s=u[0],E=u[1],Z=function(){E({id:null,label:"",name:"",phone:"",email:"",geocode:"",country:"",state:"",region:"",city:"",district:"",street:"",complement:"",coordinate:null,postal:""})},f=function(e){k.Z.post("/market/address/"+((null==s?void 0:s.id)||e.id||""),e).then((function(){(0,S.Fu)("Berhasil disimpan"),b.Z.userInfo=null,a(n+1),E(null)})).catch((function(e){var t;alert((null===(t=e.response)||void 0===t?void 0:t.data.message)||e.message)}))};return g.createElement(C.Z,{data:e&&l},(function(){return g.createElement("div",null,g.createElement(W.Z,null),g.createElement(c.Z,null,g.createElement(m.Z,null,g.createElement(p.Z,null,g.createElement(h.Link,{color:"inherit",to:"/user/profile/"},"Pengaturan Akun"),g.createElement(v.Z,{color:"textPrimary"},"Atur Data Alamat")),g.createElement(d.Z,null,g.createElement(i.Z,{startIcon:g.createElement(A.Z,null),onClick:Z,variant:"contained",color:"primary"},"Tambah Alamat"))),l.data.map((function(t){return g.createElement(m.Z,{key:t.id,button:!0,onClick:function(){return E(t)}},g.createElement(o.Z,{primary:g.createElement(g.Fragment,null,t.label,t.coordinate&&g.createElement(P.Z,{fontSize:"small"})),secondary:g.createElement(g.Fragment,null,t.name+", "+t.district+",",g.createElement("br",null)," "+t.city+", "+t.region+", "+t.postal)}),g.createElement(d.Z,null,g.createElement(y.Z,{checked:e.account.address==t.id,onChange:function(e){e&&(0,S.A$)("Yakin ingin alamat ini default?").then((function(e){e&&f({id:t.id,action:"makeDefault"})}))}})))})),0===l.data.length&&g.createElement(m.Z,null,g.createElement(r.Z,{fontStyle:"italic",width:"100%",padding:"20px"},g.createElement(v.Z,{align:"center"},"Belum ada data alamat")))),g.createElement(x,{key:(null==s?void 0:s.id)||"new",open:null!==s,onAction:f,inquiry:s,onClose:function(){return E(null)}}))}))}}}]);
//# sourceMappingURL=component---src-pages-user-alamat-jsx-2b681b87f2f642df1c78.js.map