import cv2
import numpy as np
import matplotlib.pyplot as plt
import math

def erlang_distribution(shape,scale):
    e_out=np.zeros(256,dtype=np.float32)
    mean = 1/(scale)
    c1= mean**shape
    c2= (c1) * (np.math.factorial(shape-1))
    for i in range(256):
        sum = (((i)**(shape-1)) * (np.exp(-((i)/(mean))))) / (c2)
        e_out[i] = sum
    return e_out
def histogram_equalization(img):
    histogram = np.zeros(256,dtype=np.float32)
    
    for i in range(img.shape[0]):
        for j in range(img.shape[1]):
            pixel = img[i,j]
            histogram[pixel]+=1
    pdf = np.zeros(256,dtype=np.float32)
    size = img.shape[0]*img.shape[1]
    for i in range(0,256):
        pdf[i] = histogram[i]/size
    cdf = np.zeros(256,dtype=np.float32)
    cdf[0] = pdf[0]
    new_hist =np.zeros(256,dtype=np.float32)
    for i in range(1,256):
        cdf[i] = pdf[i] + cdf[i-1]
       
    rcdf=np.zeros(256,dtype=np.uint32)    
    for i in range(0,256):
        rcdf[i] = round(cdf[i]*255)
        new_hist[rcdf[i]] = histogram[i]
    
    equalized_image = np.zeros_like(img)
    
    for i in range(img.shape[0]):
        for j in range(img.shape[1]):
            equalized_image[i,j] = rcdf [img[i,j]]
    
    return pdf,rcdf,equalized_image,new_hist
    

img=cv2.imread('histogram.jpg',cv2.IMREAD_GRAYSCALE)
shape = int(input("Enter Shape parameter: "))
scale = float(input("Enter Scale parameter: "))

pdf,cdf,equalized_image,mp_func = histogram_equalization(img)

e_distribution = erlang_distribution(shape, scale) 

e_pdf = e_distribution / np.sum(e_distribution)

e_cdf = np.zeros(256,dtype=np.float32)

e_cdf[0]= e_pdf[0]

for i in range(1,256):
    e_cdf[i] =e_pdf[i] + e_cdf[i-1]
#rg_cdf=np.zeros(256,dtype=np.uint32)    
for  i in range(0,256):
    e_cdf[i] = round(e_cdf[i]*255)

plt.subplot(2,2,1)
plt.title("target pdf")
plt.plot(e_pdf)

plt.subplot(2,2,2)
plt.title("target cdf")
plt.plot(e_cdf)
plt.show()

mp = np.zeros(256,dtype = np.float32)
for i in range(256):
    x = (np.abs(e_cdf-cdf[i])).argmin()
    mp[i] = x
output=np.zeros_like(img)

for i in range(img.shape[0]):
    for j in range(img.shape[1]):
        output[i,j] = mp[img[i,j]]

o_pdf,o_cdf,o_equalized_image,o_mp_func = histogram_equalization(output)

fig, axs = plt.subplots(2, 3, figsize=(15, 10))  # Adjust figsize as needed

plt.subplot(3,2,1)
plt.title("input histogram")
plt.hist(img.ravel(),256,[0,255])

plt.subplot(3,2,2)
plt.title("pdf of input image")
plt.plot(pdf)

plt.subplot(3,2,3)
plt.title("cdf of input image")
plt.plot(cdf)

plt.subplot(3,2,4)
plt.title("output histogram")
plt.hist(output.ravel(),256,[0,255])

plt.subplot(3,2,5)
plt.title("pdf of output image")
plt.plot(o_pdf)

plt.subplot(3,2,6)
plt.title("cdf of output image")
plt.plot(o_cdf)

plt.show()

cv2.imshow("input_img",img)
cv2.imshow("Equalized_img",equalized_image)
cv2.imshow("output_img",output)
cv2.imshow("output_equalized_img",o_equalized_image)
cv2.waitKey(0)
cv2.destroyAllWindows()